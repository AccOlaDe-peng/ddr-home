interface AuthItem {
  code: string;
  name: string;
}

interface MenuItem {
  name: string;
  code: string;
  auth?: Array<AuthItem>;
  children?: MenuItem[];
}

export { type MenuItem, type AuthItem };
