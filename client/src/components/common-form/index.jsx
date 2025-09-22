import { Select } from "@radix-ui/react-select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CommonButton from "../common-button";

function CommonForm({ formControls = {}, handleSubmit, form, btnText }) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {formControls?.length > 0
          ? formControls.map((controlItem) => (
              <FormField
                control={form.control}
                name={controlItem.id}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>{controlItem.label}</FormLabel>
                      {controlItem?.componentType === "input" ? (
                        <FormControl>
                          <input
                            type={controlItem.type}
                            placeholder={controlItem.placeholder}
                            {...field}
                            value={field.value}
                            className=" w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                          />
                        </FormControl>
                      ) : controlItem?.componentType === "select" ? (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className=" w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ">
                              {field.value ? (
                                <SelectValue
                                  className="text-black focus:text-black"
                                  placeholder={controlItem.placeholder}
                                />
                              ) : (
                                "Select"
                              )}
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {controlItem.options.map((optionItem) => (
                              <SelectItem
                                value={optionItem.id}
                                className="text-black cursor-pointer focus:text-black "
                              >
                                {optionItem.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : null}
                    </FormItem>
                  );
                }}
              />
            ))
          : null}
        <div className="flex items-center justify-center mt-5">
          <CommonButton type={"submit"} buttonText={btnText} disabled={false} />
        </div>
      </form>
    </Form>
  );
}

export default CommonForm;
