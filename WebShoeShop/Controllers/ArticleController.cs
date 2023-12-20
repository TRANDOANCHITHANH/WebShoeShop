using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebShoeShop.Models;
using WebShoeShop.Models.EF;

namespace WebShoeShop.Controllers
{
    public class ArticleController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET: Article
        public ActionResult Index(int? page)
        {
            /*var pageSize = 3;
            if (page == null)
            {
                page = 1;
            }
            *//*            IEnumerable<News> items = db.News.OrderByDescending(x => x.CreatedDate);
            *//*
            IEnumerable<Posts> items = db.Posts.Where(x => x.IsActive).OrderByDescending(x => x.CreatedDate);
            var pageIndex = page.HasValue ? Convert.ToInt32(page) : 1;
            items = items.ToPagedList(pageIndex, pageSize);
            ViewBag.PageSize = pageSize;
            ViewBag.Page = page;
            return View(items);*/
            var items = db.Products.Where(x => x.IsSale).Take(100).ToList();
            return View(items);
        }
        public ActionResult Details(int id)
        {
            var item = db.Posts.Find(id);
            return View(item);
        }
    }
}