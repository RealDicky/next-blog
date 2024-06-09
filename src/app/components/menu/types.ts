export interface MenuItemType {
  name: string
  path: string
  url: string
  children?: MenuItemType[]
}
