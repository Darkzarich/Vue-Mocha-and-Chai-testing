import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

const wrapper = shallowMount(Counter);

describe("Counter.vue", () => {
  it("renders correct markup", () => {
    expect(wrapper.html()).to.match(/class="count">0<\/span>/);
  });

  it("has a button ", () => {
    expect(wrapper.contains("button")).to.be.true;
  });
});
