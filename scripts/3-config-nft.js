import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xf28E408DaF77181fa5CE21bf5d12Ba1D1fE03B4f",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "AllenBot",
        description: "This NFT will give you access to AllenDAO!",
        image: readFileSync("scripts/assets/Allen.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()