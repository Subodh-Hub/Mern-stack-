import useAddWorkout from "../hook/useAddWorkout";

const AddWorkoutCard = () => {
  const { formik } = useAddWorkout();
  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-600">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="e.g., Bench Press"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-red-500">{formik.errors.title}</div>
        ) : null}
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-600">
          Load (in kg)
        </label>
        <input
          type="number"
          name="load"
          placeholder="e.g., 60"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formik.values.load}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.load && formik.errors.load ? (
          <div className="text-red-500">{formik.errors.load}</div>
        ) : null}
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-600">
          Reps
        </label>
        <input
          type="number"
          name="reps"
          placeholder="e.g., 10"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formik.values.reps}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.reps && formik.errors.reps ? (
          <div className="text-red-500">{formik.errors.reps}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="w-full bg-primaryLight text-white py-2 rounded-md hover:bg-primary transition"
      >
        Add Workout
      </button>
    </form>
  );
};

export default AddWorkoutCard;
