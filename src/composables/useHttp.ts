export const useHttp = () => {
  const headers = {
    appid: import.meta.env.VITE_VUE_APP_APP_ID,
    companyid: import.meta.env.VITE_VUE_APP_COMPANY_ID,
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJycDcxSGtLa1FlNnNSRDItQ251VnVqWWN6bXFxSGZGUnNCckNRTFd4NXZBIn0.eyJleHAiOjE2ODEyNzQyMjYsImlhdCI6MTY4MTIzODIzNSwiYXV0aF90aW1lIjoxNjgxMjM4MjI2LCJqdGkiOiI5YjNmNDNiYy0xOTEyLTQ4YjctODQyNi0yM2ViM2Y5NzcxNGYiLCJpc3MiOiJodHRwczovL2F1dGgucWEuYm9wLXRlY2guY29tL3JlYWxtcy9CT1AyMF9DT01QRU5TQVItQ09NUEVOU0FSIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJjNTA4MjNhLWI4NzgtNDZiMS04NzdjLTJjODg1YjkyNGViNyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJvcHMtc3NvLXFhIiwibm9uY2UiOiJlN2FiYzdiNy0zZWU3LTRjMzYtOWYzMi0yOTFmNWYwYzBmYjEiLCJzZXNzaW9uX3N0YXRlIjoiOWRiNDA2ZDQtNzVjZS00ZmU2LTlkYzctOGI5MDZmODQ0YmIzIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2NvbXBlbnNhci5tZWRpY2FsLnFhLmJvcC10ZWNoLmNvbSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtYm9wMjBfY29tcGVuc2FyLWNvbXBlbnNhciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI5ZGI0MDZkNC03NWNlLTRmZTYtOWRjNy04YjkwNmY4NDRiYjMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik1hcmNvIEJlbml0ZXoiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtZWJlbml0ZXp2QHBydWNvbXBlbnNhcnNhbHVkLmNvbSIsImxvY2FsZSI6ImVzIiwiZ2l2ZW5fbmFtZSI6Ik1hcmNvIiwiZmFtaWx5X25hbWUiOiJCZW5pdGV6IiwiZW1haWwiOiJtZWJlbml0ZXp2QHBydWNvbXBlbnNhcnNhbHVkLmNvbSJ9.FUDpnl8RhcUCnV8-udq6hfnn68Yqrxmwdcoc1GBO-X678NT0rTF9LpoyeQCWX8E9zp68Uh7YpPdT98okW2dakvS1e5yTmLfK7X6zpOOLEfgf0NBrpY04YoFzBXYlbNndewGDJNv-VHkHLM-CWBnC5VyFEY9YFUW9kACPrs4rL-wpi7nhU5MmRaJmpjdKVTvw-qyEnTTxDp-T_HTOQlNnb9_IoLofVHH0QQLKkNXtSGGBM8-qErpmFsgYrMc4cFog_dNfnfhlVVYsiK2P4kpXED90gvSFwLbrht_zmmkHprZtkT4wZ4AdVjM1J655qxD2ApGCBl2b4ehvFJV9j2qGYQ',
  };

  const baseUrl = import.meta.env.VITE_VUE_APP_BOPS_REP_V1_API_URL;
  const httpKeycV1 = import.meta.env.VITE_VUE_APP_BOPS_KEYC_API_URL;

  const fetchGet = async (url: string, params?: any) => {
    let param = '';

    if (params) {
      const keys = Object.keys(params);

      const keyValues = keys.map((key) => `${key}=${params[key]}`);
      param = keyValues.join('&');
    }

    const response = await fetch(`${baseUrl}${url}?${param}`, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    return data;
  };

  const fetchPost = async (url: string, jsonData: any) => {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(jsonData),
    });

    const data = await response.json();

    return data;
  };

  const fetchGetKeycV1 = async (url: string, params?: any) => {
    let param = '';

    if (params) {
      const keys = Object.keys(params);

      const keyValues = keys.map((key) => `${key}=${params[key]}`);
      param = keyValues.join('&');
    }

    const response = await fetch(`${httpKeycV1}${url}?${param}`, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    return data;
  };

  const fetchPostKeycV1 = async (url: string, jsonData: any) => {
    const response = await fetch(`${httpKeycV1}/${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(jsonData),
    });

    const data = await response.json();

    return data;
  };

  return { fetchGet, fetchPost, fetchGetKeycV1, fetchPostKeycV1 };
};
