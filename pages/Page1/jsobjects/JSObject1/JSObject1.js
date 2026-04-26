export default {
  dashboardData: {},

  async fetchDashboard() {
    const res = await fetch("https://invoice-api.free.beeceptor.com/dashboard");
    const data = await res.json();
    this.dashboardData = data;
    return data;
  }
};