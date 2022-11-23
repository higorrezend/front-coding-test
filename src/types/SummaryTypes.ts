export interface Country {
  ID: string
  Country: string
  CountryCode: string
  Slug: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
  Date: Date
  fatalities: number
}

export interface Countries {
  [index: number]: Country
}

export interface Global {
  NewConfirmed: string
  TotalConfirmed: string
  NewDeaths: string
  TotalDeaths: string
  NewRecovered: string
  TotalRecovered: string
  Date: string
}

export enum Order {
  DEFAULT = 'default',
  ALPHABETICAL_ASC = 'alphabetical-asc',
  ALPHABETICAL_DESC = 'alphabetical-desc',
  NUMBER_OF_CASES_ASC = 'number-of-cases-asc',
  NUMBER_OF_CASES_DESC = 'number-of-cases-desc'
}

export interface Summary {
  Global?: Global
  Countries?: Countries
  Date?: Date
  Status: boolean
}
