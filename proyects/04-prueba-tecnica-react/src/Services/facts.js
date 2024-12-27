const ENPOINT_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const res = await fetch(ENPOINT_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};

// export const getRamdomFact = () => {
//   return fetch(ENPOINT_FACT)
//     .then((res) => res.json())
//     .then((data) => {
//       const { fact } = data;
//       return fact;
//     });
// };
