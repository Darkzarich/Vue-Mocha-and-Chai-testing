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

  it("button click should increment the count", () => {
    expect(wrapper.vm.count).to.equal(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).to.equal(1);
  });
});
