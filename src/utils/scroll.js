export function scroll_to_id(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
}

export default scroll_to_id;


