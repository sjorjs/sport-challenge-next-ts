import axios, {AxiosInstance, AxiosPromise, AxiosResponse} from "axios";


// const baseUrl = 'http://localhost:4000';
export const baseUrl = process.env.SPORT_CORE_URL;
interface IApiMethodProps {
  url: string;
  name: string;
  data?: object;
}

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

  public GetMethod<T>(props: IApiMethodProps): AxiosPromise<T> {
    const { url, name, data } = props;

    return this.axiosWrapper<T>({
      method: "GET",
      url,
    });
  }
}
