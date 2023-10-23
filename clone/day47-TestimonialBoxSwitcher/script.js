const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')


const testimonials = [
    {
        "name": "Alice",
        "position": "飲食評論家",
        "photo": "https://randomuser.me/api/portraits/women/12.jpg",
        "text": "這家牛肉麵店的湯底深邃，充滿著香氣和層次。他們的牛肉絕對是美味的焦點，每一口都令人驚艷。這是一個真正的飲食寶藏！"
    },
    {
        "name": "Michael",
        "position": "廚師",
        "photo": "https://randomuser.me/api/portraits/men/28.jpg",
        "text": "作為一名廚師，我非常挑剔，但這家牛肉麵店無疑是我最喜愛的。他們對烹飪細節的關注令人印象深刻。無論您是食客還是廚師，都值得一試。"
    },
    {
        "name": "Emily",
        "position": "牛肉麵探索家",
        "photo": "https://randomuser.me/api/portraits/women/33.jpg",
        "text": "我一直在尋找全城最好的牛肉麵，而這家店無疑排在第一位。他們的獨特風味和優質食材使我成為了忠實的常客。"
    },
    {
        "name": "David",
        "position": "美食部落客",
        "photo": "https://randomuser.me/api/portraits/men/62.jpg",
        "text": "這家牛肉麵店不僅擁有絕妙的菜單，還有親切的服務。每一次品嚐都是一次美食之旅，我已經向我的讀者強烈推薦了它。"
    },
    {
        "name": "Linda",
        "position": "牛肉麵愛好者",
        "photo": "https://randomuser.me/api/portraits/women/55.jpg",
        "text": "這家牛肉麵店給了我一種回家的感覺。他們的食物帶來了濃厚的情感和回憶，每次我都期待著再次光臨。"
    },
    {
        "name": "Chris",
        "position": "當地居民",
        "photo": "https://randomuser.me/api/portraits/men/85.jpg",
        "text": "無論你是新來這裡的遊客還是當地居民，這家牛肉麵店總是可以信賴的選擇。他們的味道是這個社區的驕傲。"
    },
    {
        "name": "Sophia",
        "position": "家庭主婦",
        "photo": "https://randomuser.me/api/portraits/women/73.jpg",
        "text": "對於忙碌的家庭，這家牛肉麵店總是我們的拯救者。他們的外賣服務快速方便，味道美味，總是能讓整個家庭滿意。"
    },
    {
        "name": "Paul",
        "position": "社區居民",
        "photo": "https://randomuser.me/api/portraits/men/92.jpg",
        "text": "我們社區的聚會總是在這家牛肉麵店舉行，因為他們的食物和氛圍無與倫比。這裡不僅是一家餐廳，更是我們社區的家。"
    },
    {
        "name": "Olivia",
        "position": "學生",
        "photo": "https://randomuser.me/api/portraits/women/7.jpg",
        "text": "作為一名學生，我經常追求美食的平價選擇。這家牛肉麵店不僅價格合理，還提供了無與倫比的美味。我的同學和我都愛這裡！"
    },
    {
        "name": "John",
        "position": "退休人士",
        "photo": "https://randomuser.me/api/portraits/men/16.jpg",
        "text": "退休後，我發現了一個新的愛好，就是品嚐美食。這家牛肉麵店成為了我每週必去的地方。他們的牛肉麵總是能讓我心情愉快，我稱之為 '幸福的一碗'。"
    }
]

let idx = 1 //用來判斷當前顯示哪一則推薦

//每5000毫秒呼叫updateTestimonial 更新一次界面
// 這裡設置的秒數要和.progress-bar的css動畫秒數一樣
setInterval(updateTestimonial, 5000)


function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    // 當顯示到最後一則的時候10>10-1 初始化idx
    if (idx > testimonials.length - 1) {
        idx = 0
    }
}
