async function waitAndMaybeReject() {
  // Wait one second
  await new Promise(r => setTimeout(r, 1000));
  // Toss a coin
  // const isHeads = Boolean(Math.round(Math.random()));

  // if (isHeads) return 'yay';
  throw Error('Boo!');
}

async function foo() {
  // waitAndMaybeReject();
  waitAndMaybeReject().catch(e => {
    console.warn(e);
  });
}

// async function foo() {
//   try {
//     waitAndMaybeReject();
//   }
//   catch (e) {
//     return 'caught';
//   }
// }

// async function foo() {
//   try {
//     await waitAndMaybeReject();
//   }
//   catch (e) {
//     return 'caught';
//   }
// }

// async function foo() {
//   try {
//     return waitAndMaybeReject();
//   }
//   catch (e) {
//     return 'caught';
//   }
// }

// async function foo() {
//   try {
//     return await waitAndMaybeReject();
//   }
//   catch (e) {
//     return 'caught';
//   }
// }

// async function foo() {
//   try {
//     // Wait for the result of waitAndMaybeReject() to settle,
//     // and assign the fulfilled value to fulfilledValue:
//     const fulfilledValue = await waitAndMaybeReject();
//     // If the result of waitAndMaybeReject() rejects, our code
//     // throws, and we jump to the catch block.
//     // Otherwise, this block continues to run:
//     return fulfilledValue;
//   }
//   catch (e) {
//     return 'caught';
//   }
// }

(async () => {
  console.error(await foo());
})();
