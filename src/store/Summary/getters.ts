import { SummaryState } from './state'
import paginate from '@/utils/ArrayPaginate'
import { Countries, Country, Order } from '@/types/SummaryTypes'
import sortArrayAlphabetically from '@/utils/sortArrayAlphabetically'

const formatCountries = (countries: Countries): Array<Country> => {
  const countryFormated: Array<Country> = []
  for (const countryIndex in countries) {
    const country = countries[countryIndex]
    countryFormated.push({
      ...country,
      fatalities: calculateFatalities(country.TotalDeaths, country.TotalConfirmed)
    })
  }
  return countryFormated
}

const calculateFatalities = (TotalDeaths: number, TotalConfirmed: number) => {
  try {
    const fatalities = (TotalDeaths * 100) / TotalConfirmed
    return parseFloat(fatalities.toFixed(2))
  } catch (error) {
    return 0
  }
}

const searchInCountries = (countries: Array<Country>, search: string | undefined): Array<Country> => {
  if (search) {
    return countries.filter(country => {
      const countryName: string = country.Country.toLowerCase()
      return countryName.includes(search.toLowerCase())
    })
  }
  return countries
}

const reorderCountries = (countries: Array<Country>, order: string): Array<Country> => {
  switch (order) {
    case Order.ALPHABETICAL_ASC:
      return sortArrayAlphabetically(countries, 'Country', 'ASC')
    case Order.ALPHABETICAL_DESC:
      return sortArrayAlphabetically(countries, 'Country', 'DESC')
    case Order.NUMBER_OF_CASES_ASC:
      return sortArrayAlphabetically(countries, 'TotalConfirmed', 'ASC')
    case Order.NUMBER_OF_CASES_DESC:
      return sortArrayAlphabetically(countries, 'TotalConfirmed', 'DESC')
    default:
      return countries
  }
}

export default {
  countriesFormated: ({ countries, search, order, page, perPage }: SummaryState): Countries => {
    return paginate(reorderCountries(searchInCountries(formatCountries(countries), search), order), perPage, page)
  }
}
