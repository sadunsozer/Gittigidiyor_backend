
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
    "returnsAccepted",
    "refundMethod",
    "returnMethod",
    "returnShippingCostPayer",
    "returnPeriod",
    "returnInstructions",
    "restockingFeePercentage"
})
public class ReturnTerms {

    @JsonProperty("returnsAccepted")
    private Boolean returnsAccepted;
    @JsonProperty("refundMethod")
    private String refundMethod;
    @JsonProperty("returnMethod")
    private String returnMethod;
    @JsonProperty("returnShippingCostPayer")
    private String returnShippingCostPayer;
    @JsonProperty("returnPeriod")
    private ReturnPeriod returnPeriod;
    @JsonProperty("returnInstructions")
    private String returnInstructions;
    @JsonProperty("restockingFeePercentage")
    private String restockingFeePercentage;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("returnsAccepted")
    public Boolean getReturnsAccepted() {
        return returnsAccepted;
    }

    @JsonProperty("returnsAccepted")
    public void setReturnsAccepted(Boolean returnsAccepted) {
        this.returnsAccepted = returnsAccepted;
    }

    @JsonProperty("refundMethod")
    public String getRefundMethod() {
        return refundMethod;
    }

    @JsonProperty("refundMethod")
    public void setRefundMethod(String refundMethod) {
        this.refundMethod = refundMethod;
    }

    @JsonProperty("returnMethod")
    public String getReturnMethod() {
        return returnMethod;
    }

    @JsonProperty("returnMethod")
    public void setReturnMethod(String returnMethod) {
        this.returnMethod = returnMethod;
    }

    @JsonProperty("returnShippingCostPayer")
    public String getReturnShippingCostPayer() {
        return returnShippingCostPayer;
    }

    @JsonProperty("returnShippingCostPayer")
    public void setReturnShippingCostPayer(String returnShippingCostPayer) {
        this.returnShippingCostPayer = returnShippingCostPayer;
    }

    @JsonProperty("returnPeriod")
    public ReturnPeriod getReturnPeriod() {
        return returnPeriod;
    }

    @JsonProperty("returnPeriod")
    public void setReturnPeriod(ReturnPeriod returnPeriod) {
        this.returnPeriod = returnPeriod;
    }

    @JsonProperty("returnInstructions")
    public String getReturnInstructions() {
        return returnInstructions;
    }

    @JsonProperty("returnInstructions")
    public void setReturnInstructions(String returnInstructions) {
        this.returnInstructions = returnInstructions;
    }

    @JsonProperty("restockingFeePercentage")
    public String getRestockingFeePercentage() {
        return restockingFeePercentage;
    }

    @JsonProperty("restockingFeePercentage")
    public void setRestockingFeePercentage(String restockingFeePercentage) {
        this.restockingFeePercentage = restockingFeePercentage;
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
