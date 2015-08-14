/**
 * New node file
 */

var OrderMod = (function() {

	function Order() {
	};

	Order.prototype.m1  = function() {
		console.log('OrderLib.m1');
	};

	Order.prototype.m2  = function() {
		this.m1();
	};

	return {
		getInstance : function() { return new Order();},
		getOrder : function() { return Order }
	};
})();


function PurchaseOrder() {
};

PurchaseOrder.prototype = OrderMod.getInstance();

PurchaseOrder.prototype.m1 =  function() {
	console.log('PurchaseOrder.m1');
	OrderMod.getOrder().prototype.m1.call(this);
};

var po = new PurchaseOrder();

po.m2();

function SalesOrder() {
};

SalesOrder.prototype = OrderMod.getInstance();


SalesOrder.prototype.m1 =  function() {
	console.log('SalesOrder.m1');
	OrderMod.getOrder().prototype.m1.call(this);
};

var so = new SalesOrder();

so.m2();

po.m2();