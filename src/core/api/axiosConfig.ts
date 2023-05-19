import axios, {AxiosInstance, AxiosPromise, AxiosResponse} from "axios";


const baseUrl = 'http://localhost:4000';

export default class API {

  public axiosWrapper<T>(axiosArgument: any): AxiosPromise<T> {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      axios(axiosArgument)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  }

  public async GetMethod<T>(props: string): Promise<AxiosResponse<T>> {
    const url = baseUrl + props;
    const response = await this.axiosWrapper<T>(url);
    return response;
  }
}
