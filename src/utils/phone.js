export function call_phone(phone_number) {
  const sanitized = String(phone_number).replace(/[^+0-9]/g, '');
  window.location.href = `tel:${sanitized}`;
}

export default call_phone;


