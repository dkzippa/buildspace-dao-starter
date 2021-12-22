import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xE8C685620e52759FE09C2CF79a7171E7C1D69e96",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "UFO Invasion DAO Membership NFT",
                description: "This NFT will give you access to UFO Invasion DAO!",
                image: readFileSync("scripts/assets/membership_nft.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()