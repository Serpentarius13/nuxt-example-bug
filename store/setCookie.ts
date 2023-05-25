export default function setCookieClient(name: string, value: string | null) {
  document.cookie = `${name}=${value}`;
}
