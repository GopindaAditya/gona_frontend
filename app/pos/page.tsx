import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";
import DataFilter from "@/components/features/pos/DataFilter";
import ProductGrid from "@/components/features/pos/ProductGrid";
import OrderSummary from "@/components/features/pos/OrderSummary";
import MobileOrderSummaryButton from "@/components/features/pos/MobileOrderSummaryButton";

export default function PosPage() {
  const products = [
    {
      name: "Espresso",
      price: "Rp 25.000",
      stock: 50,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbB_ru_ba87pwSwbcbHpPg-ltwuc_x29s-fWv_kioCJaIMN8kC00gSQG8t-GYf92QK8S7G7LYus_d_Dc3KYa10w55q3uXI_I74R3tm7u1r6vYHH9ZEXXKs4iPg0Ky-mUmfA74HhsreqxaW-dWMr4d56CEl7bjY3sU-jq_41qwLV0aGRonVuD9OuoM5kbKJnc53iq01r5BjkjHY6_skoyT67mhJyOhebCmIbSh5AA35Ty-iS6swvALAmux5Ahy6aRRxMCvRsVJQQkLr",
    },
    {
      name: "Latte",
      price: "Rp 30.000",
      stock: 45,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB76xPgF_dlnJxxPKHiZQMf4tR7rrqltxfMz74f-1o66jFWvO5VjFenjnBNfnqA6pRk7n69WM5uzsEZCxbHGtJSKjWKPtY9sy5AT81olgaTkJDs5rrQTzD57CR1d2gJZX0FOgMP0SUqcHfpAOgWdUkSjTvXGm7Ab7Mw_J9YMjWdlI9fFYj9zklKEy7o1_pad1Ir-xmeUYf7mLP9ihaEuAUs6eZg_zM-0RnUKHgQ5OyLm6E31aq1YhBSLQA-vJmsjALRwz__uxC5Kgx-",
    },
    {
      name: "Cappuccino",
      price: "Rp 30.000",
      stock: 30,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAt9xAmwZaZ_8nRYdIAMwDXT6aHXlUtWrsDOOo2DXe3rN7QHypAtgo_TcrO902RO3AtTJauh-3LrAfm1Jo0FUWpp6Mciy62dfvII6SaflO6ZmTyVJ-zeTgmQzVBVTlMXYgESb-TbE61jrlycG9VtNYomUn3mi7QPamd7IjFIZpFHs68qITz3jrQUo6a1hKwdu3kGCNSuCSiJV1qKM69ROTlXM1QgOuaBHZCF3LyiPBluKe6YTJw20SXoaAUq-ObKKKpWTinuQ9ef_rU",
    },
    {
      name: "Croissant",
      price: "Rp 20.000",
      stock: 25,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsvDyRcJGrFL_FfROIzDz9K9IsQur7NxQyfrhzWMmvVEuOMRCbCN_6uouHLTg8atzsLw6WpR2w-M_Qb_wmzaW7ewC_zg0lSCUeugkq4AGtwmtPMjvbA5b25OSv-vazjtltI-8ZY9WtJJYaQcbCaRP_6oX1oNlkQlDMD4R-M25jF1JFCnRnJp5kX6-nOIBypFjW1m6Fo4axAXkwhy9W3upJftm1TKQJhpNimClnL7YCNJ890LBiPpsmekdVGqulOX3KfjmzdQs_gAkh",
    },
    {
      name: "Muffin",
      price: "Rp 22.000",
      stock: 15,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD132kWiQ3pTSXlIvv3EkFKa3TVekdSX3SmjuYYv2LNJM2Q1l9da7tTGkkmyPAiSJqq42at4UYVCwx4vdmlLfuKlvx1LQmsCb89tm-IDjtr7EaNINrfQNlotHryKFjF0r7ypkutFU2MHrrpR0z7yVgKsG7t538mExkDCnA1_JfG2QGu16FEKaX4qtIBRYUs8Yw90vIEug-PhAQqKt229heMVTnTHkngh7UvcYjQZ52NXAEW_BQRFyxuS4SVvYXPwflX0svEst9xnCCf",
    },
    {
      name: "Brownie",
      price: "Rp 25.000",
      stock: 18,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA36uE0tFYtL0cAuO5BkbcXK09oe1cbdLtnWwmb_QJMlQznS4QQd-rLHKUqL0JytGtorfJfIJLRwUSqneKlbrRnOWeEryGxGqWmr5eqfdnR7Zxvm2RB8--rq7eH9cQaKB9SBY943ZsADCNKVdPGYfWjnxgL2XFMoDmBUaztLoJMUh6XV88IYAFXYUAAqXJPobeHmSx0EZ8k_QiYe_p-HMfdh-FSQcOs0L1gBnHFbIlk5PE0fmvtoLgVEgtuq75RkWotL2sbERrHLwqr",
    },
  ];

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col p-3 sm:p-4 lg:p-5 overflow-hidden">
        <div className="flex-shrink-0 border-b border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark">
          <Header
            title="Point of Sale"
            subtitle="Manage your store transactions easily."
          />
        </div>

        {/* Main area */}
        <div className="flex flex-col lg:flex-row flex-1 mt-3 sm:mt-4 gap-3 sm:gap-4 overflow-hidden">
          {/* LEFT SECTION - Products */}
          <div className="flex-1 flex flex-col overflow-hidden lg:pr-2">
            {/* Search bar + filter */}
            <div className="sticky top-0 z-10 bg-background-light dark:bg-background-dark pb-2 sm:pb-3">
              <DataFilter />
            </div>

            {/* Scrollable products area */}
            <div className="flex-1 overflow-y-auto">
              <ProductGrid products={products} />
            </div>
          </div>

          {/* RIGHT SECTION - Order Summary (Desktop only) */}
          <div className="hidden lg:block w-[350px] xl:w-[400px] flex-shrink-0 overflow-y-auto">
            <OrderSummary />
          </div>
        </div>

        {/* Mobile floating button with popup */}
        <MobileOrderSummaryButton>
          <OrderSummary />
        </MobileOrderSummaryButton>
      </main>
    </div>
  );
}
