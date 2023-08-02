export const GET = async (url,endpoint) => {
  const res = await fetch(`${url}${endpoint}`,{
    method:'GET',
    headers:{
        'x-api-key': 'BsMc0NB4mLzBL4WAFDrq5Q==n1fC5rHb1PnXPwQ1'
    }
  });
  const data = await res.json();

  return data;
};