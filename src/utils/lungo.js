export default class lungo {
  constructor(apiKey, projectID) {
    this.apiKey = apiKey
    this.projectID = projectID
    fetch(`https://ipapi.co/json/`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        this.ip = {
          ip: res.ip,
          version: res.version,
          city: res.city,
          region: res.region,
          country: res.country,
          country_code_iso3: res.country_code_iso3,
          country_name: res.country_name,
          country_tld: res.country_tld,
          continent_code: res.continent_code,
          country_population: res.country_population,
          country_area: res.country_area,
          org: res.org,
        }
      })
  }

  sendEvent(stream, data) {
    fetch("https://event.st.ingrow.co/events", {
      method: "POST",
      headers: {
        "api-key": this.apiKey,
      },
      body: JSON.stringify({
        lungo: {
          stream,
          project: this.projectID,
        },
        event: { ...data, ...this.ip },
      }),
    })
  }
}
