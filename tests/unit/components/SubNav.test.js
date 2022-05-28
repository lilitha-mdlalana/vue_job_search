import { mount } from "@vue/test-utils";

import SubNav from "@/components/SubNav.vue";

describe("SubNav", () => {
  describe("When user is on job page", () => {
    it("displays job count", () => {
      const wrapper = mount(SubNav, {
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("When user is not on job page", () => {
    it("does not display job count", () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
