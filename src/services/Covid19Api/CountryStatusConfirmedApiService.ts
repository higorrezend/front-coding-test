import dayjs from 'dayjs'
import { Covid19ApiService } from './Covid19ApiService'
import { CountryStatus } from '@/types/CountryStatusTypes'
import { COUNTRY_STATUS_DATE_INTERVAL } from '@/constants/countryStatus'

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
    date.setDate(date.getDate() - COUNTRY_STATUS_DATE_INTERVAL)
    return {
      from: `${dayjs(date).format('YYYY-MM-DD')}T00:00:00Z`,
      to: `${dayjs(new Date()).format('YYYY-MM-DD')}T00:00:00Z`
    }
  }
}
