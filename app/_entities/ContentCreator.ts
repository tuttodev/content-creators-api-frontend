export interface ContentCreator {
  id: string,
  name: string,
  language: string,
  logoUrl: string,
  socialNetworks: {
    ig: string[] | null,
    github: string[] | null,
    twitch: string[] | null,
    x: string[] | null,
    youtube: string[] | null
  }
}