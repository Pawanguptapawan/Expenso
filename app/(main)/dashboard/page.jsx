// // "use client";
// //
// // import { api } from "../../../convex/_generated/api";
// // import { useConvexQuery } from "../../../hooks/use-convex-query";
// // import { BarLoader } from "react-spinners";
// // import {
// //   Card,
// //   CardContent,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from '../../../components/ui/card'
// //
// // import { Button } from '../../../components/ui/button'
// // import { PlusCircle, Users, CreditCard, ChevronRight } from "lucide-react";
// // import Link from "next/link";
// // import  ExpenseSummary  from "./_components/expense-summary";
// // import  BalanceSummary  from "./_components/balance-summary";
// // import  GroupList  from "./_components/group-list";
// //
// // export default function Dashboard() {
// //   const { data: balances, isLoading: balancesLoading } = useConvexQuery(
// //     api.dashboard.getUserBalances
// //   );
// //
// //   const { data: groups, isLoading: groupsLoading } = useConvexQuery(
// //     api.dashboard.getUserGroups
// //   );
// //
// //   const { data: totalSpent, isLoading: totalSpentLoading } = useConvexQuery(
// //     api.dashboard.getTotalSpent
// //   );
// //
// //   const { data: monthlySpending, isLoading: monthlySpendingLoading } =
// //     useConvexQuery(api.dashboard.getMonthlySpending);
// //
// //   const isLoading =
// //     balancesLoading ||
// //     groupsLoading ||
// //     totalSpentLoading ||
// //     monthlySpendingLoading;
// //   console.log("Dashboard fetched:");
// //   console.log({ balances, groups, totalSpent, monthlySpending });
// //
// //   return (
// //     <div className="container mx-auto py-6 space-y-6 bg-amber-50">
// //       {isLoading ? (
// //         <div className="w-full py-12 flex justify-center">
// //           <BarLoader width={"100%"} color="#36d7b7" />
// //         </div>
// //       ) : (
// //         <>
// //           <div className="flex  justify-between flex-row items-center gap-4">
// //             <h1 className="text-5xl gradient-title">Dashboard</h1>
// //             <Button asChild  className='mr-3 ml-3'>
// //               <Link href="/expenses/new">
// //                 <PlusCircle className="mr-2 h-4 w-4" />
// //                 Add expense
// //               </Link>
// //             </Button>
// //           </div>
// //
// //           {/* Balance overview cards */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
// //             <Card className='flex flex-col mx-3  shadow-stone-950 shadow-xl  '>
// //               <CardHeader className="pb-2">
// //                 <CardTitle className="gradient-title text-green-500 font-sans font-extrabold text-2xl">
// //                   Total Balance
// //                 </CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="text-2xl font-bold">
// //                   {balances?.totalBalance > 0 ? (
// //                     <span className="text-green-600">
// //                       +${balances?.totalBalance.toFixed(2)}
// //                     </span>
// //                   ) : balances?.totalBalance < 0 ? (
// //                     <span className="text-red-600">
// //                       -${Math.abs(balances?.totalBalance).toFixed(2)}
// //                     </span>
// //                   ) : (
// //                     <span>$0.00</span>
// //                   )}
// //                 </div>
// //                 <p className="text-xs text-gray-600 font-serif mt-1">
// //                   {balances?.totalBalance > 0
// //                     ? "You are owed money"
// //                     : balances?.totalBalance < 0
// //                       ? "You owe money"
// //                       : "All settled up!"}
// //                 </p>
// //               </CardContent>
// //             </Card>
// //
// //             <Card className='flex flex-col mx-3 shadow-stone-950 shadow-xl'>
// //               <CardHeader className="pb-2">
// //                 <CardTitle className="gradient-title text-green-500 font-sans font-extrabold text-2xl ">
// //                   You are owed
// //                 </CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="text-2xl font-bold text-green-600">
// //                   ${balances?.youAreOwed.toFixed(2)}
// //                 </div>
// //                 <p className="text-xs text-gray-600 font-serif mt-1">
// //                   From {balances?.oweDetails?.youAreOwedBy?.length || 0} people
// //                 </p>
// //               </CardContent>
// //             </Card>
// //
// //             <Card className='flex flex-col mx-3 shadow-stone-950 shadow-xl'>
// //               <CardHeader className="pb-2">
// //                 <CardTitle className="gradient-title text-green-500 font-sans font-extrabold text-2xl">
// //                   You owe
// //                 </CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 {balances?.oweDetails?.youOwe?.length > 0 ? (
// //                   <>
// //                     <div className="text-2xl font-bold text-red-600">
// //                       ${balances?.youOwe.toFixed(2)}
// //                     </div>
// //                     <p className="text-xs text-gray-600 mt-1 font-serif">
// //                       To {balances?.oweDetails?.youOwe?.length || 0} people
// //                     </p>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <div className="text-2xl font-bold">$0.00</div>
// //                     <p className="text-xs text-muted-foreground mt-1">
// //                       You don't owe anyone
// //                     </p>
// //                   </>
// //                 )}
// //               </CardContent>
// //             </Card>
// //           </div>
// //
// //           {/* Main dashboard content */}
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //             {/* Left column */}
// //             <div className="lg:col-span-2 space-y-6">
// //               {/* Expense summary */}
// //               <ExpenseSummary
// //                 monthlySpending={monthlySpending}
// //                 totalSpent={totalSpent}
// //               />
// //             </div>
// //
// //             {/* Right column */}
// //             <div className="space-y-6 mx-3">
// //               {/* Balance details */}
// //               <Card className='shadow-stone-950 shadow-xl'>
// //                 <CardHeader className="pb-3">
// //                   <div className="flex items-center justify-between">
// //                     <CardTitle className='gradient-title '>Balance Details</CardTitle>
// //                     <Button variant="link" asChild className="p-0 text-green-500 gradient-title">
// //                       <Link href="/contacts">
// //                         View all
// //                         <ChevronRight className="ml-1 h-4 w-4" />
// //                       </Link>
// //                     </Button>
// //                   </div>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <BalanceSummary balances={balances} />
// //                 </CardContent>
// //               </Card>
// //
// //               {/* Groups */}
// //               <Card className='shadow-xl shadow-stone-950 '>
// //                 <CardHeader className="pb-3">
// //                   <div className="flex items-center justify-between">
// //                     <CardTitle className='gradient-title'>Your Groups</CardTitle>
// //                     <Button variant="link" asChild className="p-0 text-green-500 gradient-title">
// //                       <Link href="/contacts">
// //                         View all
// //                         <ChevronRight className="ml-1 h-4 w-4" />
// //                       </Link>
// //                     </Button>
// //                   </div>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <GroupList groups={groups} />
// //                 </CardContent>
// //                 <CardFooter>
// //                   <Button variant="outline" asChild className="w-full border-green-400 graid">
// //                     <Link href="/contacts?createGroup=true">
// //                       <Users className="mr-2 h-4 w-4 gra" />
// //                       <p className="gradient-title py-2">Create new group</p>
// //
// //                     </Link>
// //                   </Button>
// //                 </CardFooter>
// //               </Card>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // }
//
// "use client";
//
// import { api } from "../../../convex/_generated/api";
// import { useConvexQuery } from "../../../hooks/use-convex-query";
// import { BarLoader } from "react-spinners";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../../../components/ui/card";
// import { Button } from "../../../components/ui/button";
// import {
//   PlusCircle,
//   Users,
//   ChevronRight,
// } from "lucide-react";
// import Link from "next/link";
// import ExpenseSummary from "./_components/expense-summary";
// import BalanceSummary from "./_components/balance-summary";
// import GroupList from "./_components/group-list";
//
// export default function Dashboard() {
//   const { data: balances, isLoading: balancesLoading } = useConvexQuery(api.dashboard.getUserBalances);
//   const { data: groups, isLoading: groupsLoading } = useConvexQuery(api.dashboard.getUserGroups);
//   const { data: totalSpent, isLoading: totalSpentLoading } = useConvexQuery(api.dashboard.getTotalSpent);
//   const { data: monthlySpending, isLoading: monthlySpendingLoading } = useConvexQuery(api.dashboard.getMonthlySpending);
//
//   const isLoading =
//       balancesLoading ||
//       groupsLoading ||
//       totalSpentLoading ||
//       monthlySpendingLoading;
//
//   const hasError =
//       !balances || !groups || !totalSpent || !monthlySpending;
//
//   const b = balances ?? {
//     totalBalance: 0,
//     youAreOwed: 0,
//     youOwe: 0,
//     oweDetails: {
//       youAreOwedBy: [],
//       youOwe: [],
//     },
//   };
//
//   if (isLoading) {
//     return (
//         <div className="w-full py-20 flex justify-center">
//           <BarLoader width={"100%"} color="#36d7b7" />
//         </div>
//     );
//   }
//
//   if (hasError) {
//     return (
//         <div className="text-center text-red-600 mt-10 text-lg">
//           Failed to load dashboard data. Please try again later.
//         </div>
//     );
//   }
//
//   return (
//       <div className="container mx-auto py-6 space-y-6 bg-amber-50">
//         <div className="flex justify-between items-center gap-4">
//           <h1 className="text-5xl gradient-title">Dashboard</h1>
//           <Button asChild className="mr-3 ml-3">
//             <Link href="/expenses/new">
//               <PlusCircle className="mr-2 h-4 w-4" />
//               Add expense
//             </Link>
//           </Button>
//         </div>
//
//         {/* Balance overview cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Total Balance */}
//           <Card className="flex flex-col mx-3 shadow-xl shadow-stone-950">
//             <CardHeader className="pb-2">
//               <CardTitle className="gradient-title text-green-500 text-2xl font-extrabold font-sans">
//                 Total Balance
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">
//                 {b.totalBalance > 0 ? (
//                     <span className="text-green-600">
//                   +${b.totalBalance.toFixed(2)}
//                 </span>
//                 ) : b.totalBalance < 0 ? (
//                     <span className="text-red-600">
//                   -${Math.abs(b.totalBalance).toFixed(2)}
//                 </span>
//                 ) : (
//                     <span>$0.00</span>
//                 )}
//               </div>
//               <p className="text-xs text-gray-600 font-serif mt-1">
//                 {b.totalBalance > 0
//                     ? "You are owed money"
//                     : b.totalBalance < 0
//                         ? "You owe money"
//                         : "All settled up!"}
//               </p>
//             </CardContent>
//           </Card>
//
//           {/* You are owed */}
//           <Card className="flex flex-col mx-3 shadow-xl shadow-stone-950">
//             <CardHeader className="pb-2">
//               <CardTitle className="gradient-title text-green-500 text-2xl font-extrabold font-sans">
//                 You are owed
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold text-green-600">
//                 ${b.youAreOwed.toFixed(2)}
//               </div>
//               <p className="text-xs text-gray-600 font-serif mt-1">
//                 From {b.oweDetails.youAreOwedBy.length} people
//               </p>
//             </CardContent>
//           </Card>
//
//           {/* You owe */}
//           <Card className="flex flex-col mx-3 shadow-xl shadow-stone-950">
//             <CardHeader className="pb-2">
//               <CardTitle className="gradient-title text-green-500 text-2xl font-extrabold font-sans">
//                 You owe
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               {b.oweDetails.youOwe.length > 0 ? (
//                   <>
//                     <div className="text-2xl font-bold text-red-600">
//                       ${b.youOwe.toFixed(2)}
//                     </div>
//                     <p className="text-xs text-gray-600 mt-1 font-serif">
//                       To {b.oweDetails.youOwe.length} people
//                     </p>
//                   </>
//               ) : (
//                   <>
//                     <div className="text-2xl font-bold">$0.00</div>
//                     <p className="text-xs text-muted-foreground mt-1">
//                       You don't owe anyone
//                     </p>
//                   </>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//
//         {/* Dashboard Details */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left: Expense summary */}
//           <div className="lg:col-span-2 space-y-6">
//             <ExpenseSummary
//                 monthlySpending={monthlySpending}
//                 totalSpent={totalSpent}
//             />
//           </div>
//
//           {/* Right: Balance details and groups */}
//           <div className="space-y-6 mx-3">
//             {/* Balance details */}
//             <Card className="shadow-xl shadow-stone-950">
//               <CardHeader className="pb-3">
//                 <div className="flex items-center justify-between">
//                   <CardTitle className="gradient-title">Balance Details</CardTitle>
//                   <Button variant="link" asChild className="p-0 text-green-500 gradient-title">
//                     <Link href="/contacts">
//                       View all
//                       <ChevronRight className="ml-1 h-4 w-4" />
//                     </Link>
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <BalanceSummary balances={b} />
//               </CardContent>
//             </Card>
//
//             {/* Group list */}
//             <Card className="shadow-xl shadow-stone-950">
//               <CardHeader className="pb-3">
//                 <div className="flex items-center justify-between">
//                   <CardTitle className="gradient-title">Your Groups</CardTitle>
//                   <Button variant="link" asChild className="p-0 text-green-500 gradient-title">
//                     <Link href="/contacts">
//                       View all
//                       <ChevronRight className="ml-1 h-4 w-4" />
//                     </Link>
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <GroupList groups={groups} />
//               </CardContent>
//               <CardFooter>
//                 <Button variant="outline" asChild className="w-full border-green-400">
//                   <Link href="/contacts?createGroup=true">
//                     <Users className="mr-2 h-4 w-4" />
//                     <span className="gradient-title">Create new group</span>
//                   </Link>
//                 </Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </div>
//   );
// }



"use client";

import { api } from "../../../convex/_generated/api";
import { useConvexQuery } from "../../../hooks/use-convex-query";
import { BarLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { PlusCircle, Users, CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";
import  ExpenseSummary  from "./_components/expense-summary"
import BalanceSummary  from "./_components/balance-summary";
import  GroupList  from "./_components/group-list";


export default function Dashboard() {
  const { data: balances, isLoading: balancesLoading } = useConvexQuery(
      api.dashboard.getUserBalances
  );

  const { data: groups, isLoading: groupsLoading } = useConvexQuery(
      api.dashboard.getUserGroups
  );

  const { data: totalSpent, isLoading: totalSpentLoading } = useConvexQuery(
      api.dashboard.getTotalSpent
  );

  const { data: monthlySpending, isLoading: monthlySpendingLoading } =
      useConvexQuery(api.dashboard.getMonthlySpending);

  const isLoading =
      balancesLoading ||
      groupsLoading ||
      totalSpentLoading ||
      monthlySpendingLoading;

  return (
      <div className="container mx-auto py-6 space-y-6 px-2">
        {isLoading ? (
            <div className="w-full py-12 flex justify-center">
              <BarLoader width={"100%"} color="#36d7b7" />
            </div>
        ) : (
            <>
              <div className="flex  justify-between flex-col sm:flex-row sm:items-center gap-4">
                <h1 className="text-5xl gradient-title">Dashboard</h1>
                <Button asChild>
                  <Link href="/expenses/new">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add expense
                  </Link>
                </Button>
              </div>

              {/* Balance overview cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Balance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {balances?.totalBalance > 0 ? (
                          <span className="text-green-600">
                      +${balances?.totalBalance.toFixed(2)}
                    </span>
                      ) : balances?.totalBalance < 0 ? (
                          <span className="text-red-600">
                      -${Math.abs(balances?.totalBalance).toFixed(2)}
                    </span>
                      ) : (
                          <span>$0.00</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {balances?.totalBalance > 0
                          ? "You are owed money"
                          : balances?.totalBalance < 0
                              ? "You owe money"
                              : "All settled up!"}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      You are owed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      ${balances?.youAreOwed.toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      From {balances?.oweDetails?.youAreOwedBy?.length || 0} people
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      You owe
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {balances?.oweDetails?.youOwe?.length > 0 ? (
                        <>
                          <div className="text-2xl font-bold text-red-600">
                            ${balances?.youOwe.toFixed(2)}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            To {balances?.oweDetails?.youOwe?.length || 0} people
                          </p>
                        </>
                    ) : (
                        <>
                          <div className="text-2xl font-bold">$0.00</div>
                          <p className="text-xs text-muted-foreground mt-1">
                            You don't owe anyone
                          </p>
                        </>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Main dashboard content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Expense summary */}
                  <ExpenseSummary
                      monthlySpending={monthlySpending}
                      totalSpent={totalSpent}
                  />
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  {/* Balance details */}
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle>Balance Details</CardTitle>
                        <Button variant="link" asChild className="p-0">
                          <Link href="/contacts">
                            View all
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <BalanceSummary balances={balances} />
                    </CardContent>
                  </Card>

                  {/* Groups */}
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle>Your Groups</CardTitle>
                        <Button variant="link" asChild className="p-0">
                          <Link href="/contacts">
                            View all
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <GroupList groups={groups} />
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contacts?createGroup=true">
                          <Users className="mr-2 h-4 w-4" />
                          Create new group
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </>
        )}
      </div>
  );
}