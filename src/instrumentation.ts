export async function register() {
  // "msw/node"がNode.jsランタイムでのみ利用可能（=Edgeランタイムで利用不可）
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { initMocks } = await import("./lib/msw");
    initMocks();
  }
}