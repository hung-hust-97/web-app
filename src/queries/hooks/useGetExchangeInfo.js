import {useQuery} from "@tanstack/react-query";
import {getExchangeInfo} from "js-api-client";

export const useGetExchangeInfo = (interval) => {
    // Dùng hook useQuery để tự động thực hiện các thao tác với api( fetch, cache, update...)
    // interval: 1Y, 1M, 1W, 1D, 1H, 1m
    // getExchangeInfoFunc: hàm gọi api lấy thông tin sàn giao dịch
    return useQuery(
        ['exchangeInfo', interval],
        () => getExchangeInfoFunc(interval),
        {
            staleTime: 5000,
            refetchInterval: 10000
        });
}

const getExchangeInfoFunc = async (interval) => {
    const {data} = await getExchangeInfo(interval)
    return data;

}

