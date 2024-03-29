import { SessionKit } from "@wharfkit/session"
import { WebRenderer } from "@wharfkit/web-renderer"
import { WalletPluginCloudWallet } from "@wharfkit/wallet-plugin-cloudwallet"
import { WalletPluginAnchor } from "@wharfkit/wallet-plugin-anchor"
import { WalletPluginWombat } from "@wharfkit/wallet-plugin-wombat"

async function main() {
  window.Wharfkit = {
    SessionKit,
    WebRenderer,
    WalletPluginCloudWallet,
    WalletPluginAnchor,
    WalletPluginWombat
  }
}

main()