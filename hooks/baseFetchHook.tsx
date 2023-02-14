import { getSession } from "next-auth/react";
const baseFetchHook = async (url: string, data: any, isAuth: boolean, isNotification: boolean) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": ""
    };
    if (isAuth == true) {
      const session = await getSession();
      headers.Authorization = "Bearer " + "access Token gelecek.";
    }
    const res = await fetch(`/api/` + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    const _data = await res.json();
    if (_data.status === 0) {
      if (isNotification !== false) {
        "notification success"
      }
    } else if (_data.status === 5) {
      if (isNotification !== false) {
        "notification warning"
      }
    } else {
      "notification error"
    }
    return _data;
  } catch (error) {
    console.log(error);
    "notification error"
  }
};

export default baseFetchHook;
