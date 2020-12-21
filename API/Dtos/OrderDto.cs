namespace API.Dtos
{
    public interface OrderDto
    {
         public string BasketId { get; set; }
         public int DeliveryMethodId { get; set; }
         public AddressDto ShipToAddress { get; set; }
    }
}