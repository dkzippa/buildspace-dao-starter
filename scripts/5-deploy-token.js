import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x56ef3CF8529E08F13f03131F65c8b66432Ba81A6");

(async () => {
    try {
        // Deploy a standard ERC-20 contract.
        const tokenModule = await app.deployTokenModule({
            // What's your token's name? Ex. "Ethereum"
            name: "UFO Invasion DAO Governance Token",
            // What's your token's symbol? Ex. "ETH"
            symbol: "UFOIN",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();
