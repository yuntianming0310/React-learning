const KEY = "bdc_db019895de4f49c29cba0e6933e632f9";
const localityLanguage = "zh-hans";

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=${localityLanguage}&key=${KEY}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
