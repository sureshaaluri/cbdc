# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/suresh/CBDC/opencbdc-tx

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/suresh/CBDC/opencbdc-tx/build

# Include any dependencies generated for this target.
include src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/depend.make

# Include the progress variables for this target.
include src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/progress.make

# Include the compile flags for this target's objects.
include src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/client.o: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/client.o: ../src/uhs/twophase/locking_shard/client.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/client.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/locking_shard.dir/client.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/client.cpp

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/client.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/locking_shard.dir/client.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/client.cpp > CMakeFiles/locking_shard.dir/client.i

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/client.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/locking_shard.dir/client.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/client.cpp -o CMakeFiles/locking_shard.dir/client.s

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/controller.o: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/controller.o: ../src/uhs/twophase/locking_shard/controller.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/controller.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/locking_shard.dir/controller.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/controller.cpp

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/controller.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/locking_shard.dir/controller.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/controller.cpp > CMakeFiles/locking_shard.dir/controller.i

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/controller.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/locking_shard.dir/controller.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/controller.cpp -o CMakeFiles/locking_shard.dir/controller.s

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/locking_shard.o: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/locking_shard.o: ../src/uhs/twophase/locking_shard/locking_shard.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/locking_shard.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/locking_shard.dir/locking_shard.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/locking_shard.cpp

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/locking_shard.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/locking_shard.dir/locking_shard.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/locking_shard.cpp > CMakeFiles/locking_shard.dir/locking_shard.i

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/locking_shard.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/locking_shard.dir/locking_shard.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/locking_shard.cpp -o CMakeFiles/locking_shard.dir/locking_shard.s

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/interface.o: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/interface.o: ../src/uhs/twophase/locking_shard/interface.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/interface.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/locking_shard.dir/interface.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/interface.cpp

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/interface.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/locking_shard.dir/interface.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/interface.cpp > CMakeFiles/locking_shard.dir/interface.i

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/interface.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/locking_shard.dir/interface.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/interface.cpp -o CMakeFiles/locking_shard.dir/interface.s

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/format.o: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/format.o: ../src/uhs/twophase/locking_shard/format.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/format.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/locking_shard.dir/format.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/format.cpp

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/format.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/locking_shard.dir/format.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/format.cpp > CMakeFiles/locking_shard.dir/format.i

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/format.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/locking_shard.dir/format.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/format.cpp -o CMakeFiles/locking_shard.dir/format.s

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/messages.o: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/messages.o: ../src/uhs/twophase/locking_shard/messages.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/messages.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/locking_shard.dir/messages.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/messages.cpp

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/messages.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/locking_shard.dir/messages.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/messages.cpp > CMakeFiles/locking_shard.dir/messages.i

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/messages.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/locking_shard.dir/messages.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/messages.cpp -o CMakeFiles/locking_shard.dir/messages.s

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/state_machine.o: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/state_machine.o: ../src/uhs/twophase/locking_shard/state_machine.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building CXX object src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/state_machine.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/locking_shard.dir/state_machine.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/state_machine.cpp

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/state_machine.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/locking_shard.dir/state_machine.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/state_machine.cpp > CMakeFiles/locking_shard.dir/state_machine.i

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/state_machine.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/locking_shard.dir/state_machine.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/state_machine.cpp -o CMakeFiles/locking_shard.dir/state_machine.s

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_client.o: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_client.o: ../src/uhs/twophase/locking_shard/status_client.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Building CXX object src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_client.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/locking_shard.dir/status_client.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/status_client.cpp

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_client.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/locking_shard.dir/status_client.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/status_client.cpp > CMakeFiles/locking_shard.dir/status_client.i

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_client.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/locking_shard.dir/status_client.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/status_client.cpp -o CMakeFiles/locking_shard.dir/status_client.s

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_server.o: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/flags.make
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_server.o: ../src/uhs/twophase/locking_shard/status_server.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_9) "Building CXX object src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_server.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/locking_shard.dir/status_server.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/status_server.cpp

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_server.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/locking_shard.dir/status_server.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/status_server.cpp > CMakeFiles/locking_shard.dir/status_server.i

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_server.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/locking_shard.dir/status_server.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard/status_server.cpp -o CMakeFiles/locking_shard.dir/status_server.s

# Object files for target locking_shard
locking_shard_OBJECTS = \
"CMakeFiles/locking_shard.dir/client.o" \
"CMakeFiles/locking_shard.dir/controller.o" \
"CMakeFiles/locking_shard.dir/locking_shard.o" \
"CMakeFiles/locking_shard.dir/interface.o" \
"CMakeFiles/locking_shard.dir/format.o" \
"CMakeFiles/locking_shard.dir/messages.o" \
"CMakeFiles/locking_shard.dir/state_machine.o" \
"CMakeFiles/locking_shard.dir/status_client.o" \
"CMakeFiles/locking_shard.dir/status_server.o"

# External object files for target locking_shard
locking_shard_EXTERNAL_OBJECTS =

src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/client.o
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/controller.o
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/locking_shard.o
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/interface.o
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/format.o
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/messages.o
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/state_machine.o
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_client.o
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/status_server.o
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/build.make
src/uhs/twophase/locking_shard/liblocking_shard.a: src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_10) "Linking CXX static library liblocking_shard.a"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && $(CMAKE_COMMAND) -P CMakeFiles/locking_shard.dir/cmake_clean_target.cmake
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/locking_shard.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/build: src/uhs/twophase/locking_shard/liblocking_shard.a

.PHONY : src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/build

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/clean:
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard && $(CMAKE_COMMAND) -P CMakeFiles/locking_shard.dir/cmake_clean.cmake
.PHONY : src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/clean

src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/depend:
	cd /home/suresh/CBDC/opencbdc-tx/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/suresh/CBDC/opencbdc-tx /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/locking_shard /home/suresh/CBDC/opencbdc-tx/build /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : src/uhs/twophase/locking_shard/CMakeFiles/locking_shard.dir/depend

