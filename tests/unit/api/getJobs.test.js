import axios from "axios";
jest.mock("axios");
import getJobs from "@/api/getJobs";

describe("getJobs", async () => {
  it("fetches jobs that candidates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("https://myfakeapi.com");
  });
});
