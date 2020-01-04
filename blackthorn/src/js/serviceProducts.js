class ServiceProducts {
	constructor(containerProducts, containerCounter, productsCatalog) {
		this.container = document.querySelector(containerProducts);
		this.containerCounter = document.querySelector(containerCounter);
		this.productsCatalog = productsCatalog;
		this.create();
	}
	create(){
		var wrapper = document.createElement('slot');

		var products = serviceStore.getProducts();
		this.containerCounter.innerText = products.length;

		for(var i=0; i<this.productsCatalog.length; i++) {

			var index = products.indexOf(this.productsCatalog[i].id);
			if (index === -1) {
				var activeClass = '';
				var activeText = 'Добавить в корзину';
			} else {
				var activeClass = ' btn-active';
				var activeText = 'Удалить из корзины';
			}

			let item  = serviceCreateElement.getElement({ tagName:'div',    className:'products__card' });
			let name  = serviceCreateElement.getElement({ tagName:'div',    className:'products__card-name',  innerText:this.productsCatalog[i].name });
			let img   = serviceCreateElement.getElement({ tagName:'div',    className:'products__card-image',   backgroundImage:`url(${this.productsCatalog[i].img})` });
			let price = serviceCreateElement.getElement({ tagName:'div',    className:'products__card-price', innerText:this.productsCatalog[i].price.toLocaleString() + ' '+'Р' });
            let btn   = serviceCreateElement.getElement({ tagName:'button', className:'products__card-button' + activeClass,   innerText:activeText, id:this.productsCatalog[i].id });
			let link  = serviceCreateElement.getElement({ tagName:'a', className:'products__card-link',   innerText:'Подробнее' });
			
			btn.addEventListener('click', function() {
				var id = this.getAttribute('data-id');
				var result = serviceStore.putProduct(id);

				serviceProducts.containerCounter.innerText = result.products.length;

				if(result.pushProduct) {
					this.classList.add('btn-active');
					this.innerText = 'Удалить из корзины';
				} else {
					this.classList.remove('btn-active');
					this.innerText = 'Добавить в корзину';
				}
			});

		
			item.appendChild(img);
			item.appendChild(name);
			item.appendChild(price);
			item.appendChild(btn);
			wrapper.appendChild(item);
		}
		this.container.appendChild(wrapper);
	}
}

var serviceProducts = new ServiceProducts('.products__container', '.counter', productsCatalog);


