const FAVOURITE_FOOD = process.env.FAVOURITE_FOOD;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`I like ${FAVOURITE_FOOD}`);
        await sleep(5000);
  }
}

main();
