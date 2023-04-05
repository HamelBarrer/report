export const useHttp = () => {
  const headers = {
    appid: import.meta.env.VITE_VUE_APP_APP_ID,
    companyid: import.meta.env.VITE_VUE_APP_COMPANY_ID,
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJycDcxSGtLa1FlNnNSRDItQ251VnVqWWN6bXFxSGZGUnNCckNRTFd4NXZBIn0.eyJleHAiOjE2ODA2NTg3MTIsImlhdCI6MTY4MDYyMjcyNiwiYXV0aF90aW1lIjoxNjgwNjIyNzEyLCJqdGkiOiJjYTNiNGQ4ZC0xMmI4LTQ4OTYtYTIyZC1hNWI1OTVlOTgzM2YiLCJpc3MiOiJodHRwczovL2F1dGgucWEuYm9wLXRlY2guY29tL3JlYWxtcy9CT1AyMF9DT01QRU5TQVItQ09NUEVOU0FSIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJjNTA4MjNhLWI4NzgtNDZiMS04NzdjLTJjODg1YjkyNGViNyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJvcHMtc3NvLXFhIiwibm9uY2UiOiI0MjhjNmQyMC1iMDg4LTQ1MGYtODNmOC1mMWEyZjRjYmJkODgiLCJzZXNzaW9uX3N0YXRlIjoiZWFlODgzNWQtM2VkZi00ODAyLTg4ZTgtMzZmYzAxODY3YzQ4IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2NvbXBlbnNhci5tZWRpY2FsLnFhLmJvcC10ZWNoLmNvbSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtYm9wMjBfY29tcGVuc2FyLWNvbXBlbnNhciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJlYWU4ODM1ZC0zZWRmLTQ4MDItODhlOC0zNmZjMDE4NjdjNDgiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik1hcmNvIEJlbml0ZXoiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtZWJlbml0ZXp2QHBydWNvbXBlbnNhcnNhbHVkLmNvbSIsImxvY2FsZSI6ImVzIiwiZ2l2ZW5fbmFtZSI6Ik1hcmNvIiwiZmFtaWx5X25hbWUiOiJCZW5pdGV6IiwiZW1haWwiOiJtZWJlbml0ZXp2QHBydWNvbXBlbnNhcnNhbHVkLmNvbSJ9.RYhD37EUBCXUCnupQeb0N4YHSKyiGjVs3X7bMmBYEfxpY4z7FgOkeFiWY6bLGGj5G3Tfp4VraNZaZjLI6MiRnHawqDIqptsGvVJAc-9szNkis7dlmBmZqEbk_WxP-tYLNN2WYeSyiVbpQqCVXgmcbBSm18BO_kS_N7nvuiih8dJDoWXIY8Dz8JAdsodlW6c3eeiQWCvnUgOyYR0JSLdD-v-rTDr6eznIQ0gRhxpgb9aWzKNkGltQ-oxUFbAt7H4cYfM4ydB8COJvX6wHNYRi9Z9JgYHGzmWFzyWS7x-OU_8UMKvAxiJ5q7nIXBWnfjrU2ITo59Qaiz3CWOlK0TkswA',
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
