import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <section>
      <SectionTitle heading={"Payment History"} subheading={"Your orders"} />
      <div>
        <h2 className="uppercase text-2xl font-semibold mb-5">
          Total Payment: {paymentHistory.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>price</th>
                <th>Transaction ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>${item.price}</td>
                  <td>{item.transactionId}</td>

                  <th>
                    <button className="btn bg-yellow-400 text-black btn-xs">
                      {item.status}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PaymentHistory;
