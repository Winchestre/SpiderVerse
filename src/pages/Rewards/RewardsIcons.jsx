import { RewardIconsHeader, RewardCards } from "@/components/CMS";
import { useState } from "react";

const RewardsIcons = () => {
  return (
    <section className="section">
      {/* <BlockchainIconsHeader /> */}
      <div className="mt-8" />
      <RewardIconsHeader />
      <RewardCards />
    </section>
  )
}

export default RewardsIcons