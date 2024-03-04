import { mixpay, sochitel, xoxoday, reloadly, dingconnect, depay, balance } from "@/assets/icons";

export const getStyleByValue = (value) => {
  const lowercasedValue = value.toLowerCase();
  switch (lowercasedValue) {
    case 'reloadly':
      return { class: `text-stone-950  w-[120px] bg-cyan-300`, icon: reloadly };
    case 'xoxoday':
      return { class: `text-white bg-red-400 w-[120px]`, icon: xoxoday };
    case 'sochitel':
      return { class: `text-white bg-sky-400 w-[120px] `, icon: sochitel };
    case 'ding connect':
        return { class: `text-white bg-fuchsia-400 w-[155px]`, icon: dingconnect };
    case 'mixpay':
        return { class: `text-white bg-indigo-400 w-[120px] `, icon: mixpay };
    case 'depay':
      return { class: `text-white bg-pink-300 w-[155px]`, icon: depay };
    case 'balance':
      return { class: `text-white bg-blue-900 w-[155px]`, icon: balance };
    default:
      return { class: '', icon: null };
  }
};


