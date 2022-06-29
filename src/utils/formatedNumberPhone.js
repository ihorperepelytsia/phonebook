import { notifyInfo } from './notify';
export const formatedNumberPhone = number => {
  if (number.length < 5 || number.length > 10) {
    notifyInfo('Number must contain 5 to 10 digits');
    return;
  } else {
    return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '-');
  }
};

export const formatedNumberPhoneEdit = number => {
  if (number.length === 0) {
    return '';
  }
  if (number.length < 5 || number.length > 10) {
    notifyInfo('Number must contain 5 to 10 digits');
    return;
  } else {
    return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '-');
  }
};
