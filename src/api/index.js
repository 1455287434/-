import axios from "@/axios";
export function sun(data) {
    console.log(145528744)
    //192.168.24.116:99/smart-community
    return axios({
        method: "get",
        url: "/api/sysVillage/cdscv?timestamp=1601001356554",
        data: data,
        headers: {
            authorization: "authorization: bearer 24568395-a00a-4f77-b67c-bbd3231d64e9"
        }
    })
}