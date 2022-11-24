import dayjs from 'dayjs'
import { Covid19ApiService } from './Covid19ApiService'
import { CountryStatus } from '@/types/CountryStatusTypes'

export class CountryStatusConfirmedApiService extends Covid19ApiService {
  protected uri = '/total/country/{countryName}/status/confirmed'

  public async getCountryStatusConfirmed (countryName: string): Promise<CountryStatus> {
    const uri: string = this.uri.replace('{countryName}', countryName)
    return await this.instance.get<CountryStatus>(uri, {
      params: this.getCountryStatusParams()
    })
      .then(({ data }) => data)
  }

  private getCountryStatusParams () {
    const date = new Date()
    const dateInterval = 5
    date.setDate(date.getDate() - dateInterval)
    return {
      from: `${dayjs(date).format('YYYY-MM-DD')}T00:00:00Z`,
      to: `${dayjs(new Date()).format('YYYY-MM-DD')}T00:00:00Z`
    }
  }
}
