
package dto;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "shippingCostType",
    "shippingCost"
})
public class ShippingOption {

    @JsonProperty("shippingCostType")
    private String shippingCostType;
    @JsonProperty("shippingCost")
    private ShippingCost shippingCost;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("shippingCostType")
    public String getShippingCostType() {
        return shippingCostType;
    }

    @JsonProperty("shippingCostType")
    public void setShippingCostType(String shippingCostType) {
        this.shippingCostType = shippingCostType;
    }

    @JsonProperty("shippingCost")
    public ShippingCost getShippingCost() {
        return shippingCost;
    }

    @JsonProperty("shippingCost")
    public void setShippingCost(ShippingCost shippingCost) {
        this.shippingCost = shippingCost;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
