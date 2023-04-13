export const useHttp = () => {
  const headers = {
    appid: import.meta.env.VITE_VUE_APP_APP_ID,
    companyid: import.meta.env.VITE_VUE_APP_COMPANY_ID,
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJycDcxSGtLa1FlNnNSRDItQ251VnVqWWN6bXFxSGZGUnNCckNRTFd4NXZBIn0.eyJleHAiOjE2ODEzMzU2OTgsImlhdCI6MTY4MTI5OTcwMiwiYXV0aF90aW1lIjoxNjgxMjk5Njk4LCJqdGkiOiI2ZTY5ZGY1My1kM2RkLTRjYmUtYmVkYS1kMTVmNWZkZmJhZDgiLCJpc3MiOiJodHRwczovL2F1dGgucWEuYm9wLXRlY2guY29tL3JlYWxtcy9CT1AyMF9DT01QRU5TQVItQ09NUEVOU0FSIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJjNTA4MjNhLWI4NzgtNDZiMS04NzdjLTJjODg1YjkyNGViNyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJvcHMtc3NvLXFhIiwibm9uY2UiOiIzMjdhYmNiYS1iODRmLTQwMjctYTAzMi1iYjc4ZTQ1NTNjMmEiLCJzZXNzaW9uX3N0YXRlIjoiMzQyNjQ5MTYtNDg5OS00Y2EyLThmMGQtZmQ5YTJjODgzOTBkIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2NvbXBlbnNhci5tZWRpY2FsLnFhLmJvcC10ZWNoLmNvbSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtYm9wMjBfY29tcGVuc2FyLWNvbXBlbnNhciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiIzNDI2NDkxNi00ODk5LTRjYTItOGYwZC1mZDlhMmM4ODM5MGQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik1hcmNvIEJlbml0ZXoiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtZWJlbml0ZXp2QHBydWNvbXBlbnNhcnNhbHVkLmNvbSIsImxvY2FsZSI6ImVzIiwiZ2l2ZW5fbmFtZSI6Ik1hcmNvIiwiZmFtaWx5X25hbWUiOiJCZW5pdGV6IiwiZW1haWwiOiJtZWJlbml0ZXp2QHBydWNvbXBlbnNhcnNhbHVkLmNvbSJ9.DK8JHRyDZa73bj3Gj-JGURgKxIrmNp5ADNS0j4xweVa4aGRsLNrLMpKNQnG1YUXmacwtnko2sP949d1VV0TfxydR_hVPXAJhJgOmpHiXkIUta1FTHNAdkf0rBp6Qell5KehnJFCUYHB7GN2bejp52hNcXtP3FPLoUgbgDeEJrIwmCwalE6l2Sg-YLt9_lrIia9_EJaiirtLZN5syha6CElfbLs-1iRg2JB_pWknuesbSOPZU0lkQni5ZtLb9r-BHLbF1uWiX_hi6bvlpQ33xgDs-XmF0ionyx__kxf7zJKIZouEvJv4cbVl6zz4Km2sfSAMdZVkqyO2tCDiKmYN9cg',
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
