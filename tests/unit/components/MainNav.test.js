import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Displays our company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("TG Careers");
  });
});
