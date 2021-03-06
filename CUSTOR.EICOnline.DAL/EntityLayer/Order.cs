using System;
using System.Collections.ObjectModel;

namespace CUSTOR.EICOnline.DAL.EntityLayer
{
  public partial class Order
  {
    public Order()
    {
    }

    public Order(Int32? orderId)
    {
      OrderId = orderId;
    }

    public Int32? OrderId { get; set; }

    //public Int32? CustomerID { get; set; }
    public Int32? ServiceApplicationId { get; set; }

    public string ReceiptNumber { get; set; }

    public DateTime? OrderDate { get; set; }

    public Boolean? IsPaid { get; set; }

    public Int32? PaymentTypeId { get; set; }
    public Int32? CreatedUserId { get; set; }
    public double TotalAmount { get; set; }

    public DateTime? PaymentDate { get; set; }

    public String CheckNo { get; set; }

    public String CashierUserName { get; set; }
    public Int32 CashierUserId { get; set; }

    public Boolean? IsVoid { get; set; }

    //public String VoidBy { get; set; }

    public DateTime? VoidDate { get; set; }

    public String VoidReason { get; set; }

    //public String SiteCode { get; set; }

    public Int32 PreparedByUserId { get; set; }

    public DateTime? EventDatetime { get; set; }

    public String UpdatedUsername { get; set; }

    public DateTime? UpdatedEventDatetime { get; set; }

    //public Customer CustomerFk { get; set; }

    //public ServiceApplication ServiceApplication { get; set; }
    public Collection<OrderDetail> OrderDetails { get; set; }
  }
}