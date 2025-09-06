// utils/captureScanData.js
import { v4 as uuidv4 } from "uuid";
import { UAParser } from "ua-parser-js";

export const captureScanData = async (userId, profileType) => {
    try {
        // Persistent Device ID
        let deviceId = localStorage.getItem("deviceId");
        if (!deviceId) {
            deviceId = uuidv4();
            localStorage.setItem("deviceId", deviceId);
        }

        // Device Info (Brand + Model if available)
        const parser = new UAParser();
        const result = parser.getResult();

        let device = "Unknown Device";
        if (result.device.vendor || result.device.model) {
            device = `${result.device.vendor || ""} ${result.device.model || ""}`.trim();
        }

        // Public IP
        let ipAddress = "Unknown";
        try {
            const ipRes = await fetch("https://api.ipify.org?format=json");
            const { ip } = await ipRes.json();
            ipAddress = ip;
        } catch (err) {
            console.warn("IP fetch failed:", err);
        }

        // Location (with shorter reverse geocoding: street + province)
        const getLocation = () =>
            new Promise((resolve) => {
                if (!navigator.geolocation) {
                    resolve({
                        latitude: null,
                        longitude: null,
                        location: "Geolocation not supported",
                    });
                    return;
                }

                navigator.geolocation.getCurrentPosition(
                    async (pos) => {
                        const latitude = pos.coords.latitude;
                        const longitude = pos.coords.longitude;

                        let locationName = `${latitude},${longitude}`;
                        try {
                            // Reverse geocoding with OpenStreetMap
                            const res = await fetch(
                                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
                            );
                            const data = await res.json();

                            if (data?.address) {
                                const road = data.address.road || data.address.suburb || "";
                                const state = data.address.state || "";
                                locationName = [road, state].filter(Boolean).join(", ");
                            }
                        } catch (err) {
                            console.warn("Reverse geocoding failed:", err);
                        }

                        resolve({
                            latitude,
                            longitude,
                            location: locationName,
                        });
                    },
                    (err) => {
                        console.warn("Geolocation denied/unavailable:", err);
                        resolve({
                            latitude: null,
                            longitude: null,
                            location: "Permission denied",
                        });
                    },
                    { enableHighAccuracy: true, timeout: 10000 }
                );
            });

        const { latitude, longitude, location } = await getLocation();

        // Prepare request body
        const requestBody = JSON.stringify({
            userId,
            deviceId,
            device, // Now brand + model if available
            location, // Shorter (Street + Province)
            latitude,
            longitude,
            ipAddress,
        });

        console.log("Sent scan Data ==================>\n\n", requestBody);

        if (profileType === "PRIMARY") {
            // Send to backend
            await fetch("https://nfc-be.onrender.com/api/v1/primaryProfile/scan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: requestBody,
            });


        } else {
            // Send to backend
            await fetch("https://nfc-be.onrender.com/api/v1/eventProfile/scan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: requestBody,
            });
        }


        console.log("✅ Scan synced successfully");
    } catch (err) {
        console.error("❌ Error syncing scan:", err);
    }
};
